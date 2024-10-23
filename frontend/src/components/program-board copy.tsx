import { FormEvent, useEffect, useState } from 'react'
import { ModalRegister } from './components-ui/modal-register'
import { ModalUpdate } from './components-ui/modal-update'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { api } from "@/lib/axios"
import { Circle, CircleCheck, Edit, Ellipsis, PencilLineIcon } from 'lucide-react'
import { Textarea } from './ui/textarea'

interface Exercise {
  id: string
  title: string
  label: string
  status: boolean
  section: string
}

interface Section {
  id: string
  title: string
  workout: string
  exercises: Exercise[]
}

interface Workout {
  id: string
  title: string
  sections: Section[]
}

export function ProgramBoard() {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [workoutTitle, setWorkoutTitle] = useState<string>('')
  const [formUpdateWorkout, setFormUpdateWorkout] = useState<Partial<Workout>>({ id: '', title: '' })
  const [formSection, setFormSection] = useState<Partial<Section>>({ id: '', title: '', workout: '' })
  const [formExercise, setFormExercise] = useState<Partial<Exercise>>({ id: '', title: '', section: '', label: '', status: false })
  const [isRegisterWorkoutModalOpen, setIsRegisterWorkoutModalOpen] = useState<boolean>(false)
  const [isRegisterSectionModalOpen, setIsRegisterSectionModalOpen] = useState<string | null>(null)
  const [isRegisterExerciseModalOpen, setIsRegisterExerciseModalOpen] = useState<string | null>(null)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<string | null>(null)
  const [, setSelectedWorkoutId] = useState<string | null>(null)

  const fetchWorkouts = async () => {
    try {
      const response = await api.get('/p/workouts/')
      setWorkouts(response.data)
    } catch (error) {
      console.error('Error fetching workouts:', error)
    }
  }

  useEffect(() => {
    fetchWorkouts()
  }, [])

  async function addWorkout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await api.post('/p/workouts/', {
        title: workoutTitle,
      })

      setWorkoutTitle('')
      setIsRegisterWorkoutModalOpen(false)

      await fetchWorkouts()
    } catch (error) {
      console.error('Error adding workout:', error)
    }
  }

  async function updateWorkout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await api.put(`/p/workouts/${formUpdateWorkout.id}/`, {
        title: formUpdateWorkout.title,
      })

      setFormUpdateWorkout({ id: '', title: '' })
      setIsUpdateModalOpen(null)

      await fetchWorkouts()
    } catch (error) {
      console.error('Error updating workout:', error)
    }
  }

  async function deleteWorkout(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    try {
      await api.delete(`/p/workouts/${formUpdateWorkout.id}/`)

      setFormUpdateWorkout({ id: '', title: '' })
      setIsUpdateModalOpen(null)

      await fetchWorkouts()
    } catch (error) {
      console.error('Error deleting workout:', error)
    }
  }

  async function addSection(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await api.post('/p/sections/', {
        title: formSection.title,
        workout: formSection.workout
      })

      setFormSection({ id: '', title: '', workout: '' })
      setIsRegisterSectionModalOpen(null)

      await fetchWorkouts()
    } catch (error) {
      console.error('Error adding section:', error)
    }
  }

  async function updateSection(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await api.put(`/p/sections/${formSection.id}/`, {
        title: formSection.title,
        workout: formSection.workout,
      })

      setFormSection({ id: '', title: '', workout: '' })
      setIsUpdateModalOpen(null)

      await fetchWorkouts()
    } catch (error) {
      console.error('Error updating section:', error)
    }
  }

  async function deleteSection(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    try {
      await api.delete(`/p/sections/${formSection.id}/`)

      setFormSection({ id: '', title: '', workout: '' })
      setIsUpdateModalOpen(null)

      await fetchWorkouts()
    } catch (error) {
      console.error('Error deleting section:', error)
    }
  }

  async function addExercise(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await api.post('/p/exercises/', {
        title: formExercise.title,
        section: formExercise.section,
        label: formExercise.label,
        status: formExercise.status,
      })

      setFormExercise({ id: '', title: '', section: '', label: '', status: false })
      setIsRegisterExerciseModalOpen(null)

      await fetchWorkouts()
    } catch (error) {
      console.error('Error adding exercise:', error)
    }
  }

  async function updateExercise(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await api.put(`/p/exercises/${formExercise.id}/`, {
        title: formExercise.title,
        section: formExercise.section,
        label: formExercise.label
      })

      setFormExercise({ id: '', title: '', section: '', label: '' })
      setIsUpdateModalOpen(null)

      await fetchWorkouts()
    } catch (error) {
      console.error('Error updating section:', error)
    }
  }

  async function deleteExercise(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    try {
      await api.delete(`/p/exercises/${formExercise.id}/`)

      setFormExercise({ id: '', title: '', section: '', label: '' })
      setIsUpdateModalOpen(null)

      await fetchWorkouts()
    } catch (error) {
      console.error('Error deleting section:', error)
    }
  }

  function ModalAddSection({ workoutId }: { workoutId: string }) {
    const [sectionTitle, setSectionTitle] = useState<string>('')

    return (
      <ModalRegister
        buttonTitle='ADICIONAR SEÇÃO'
        description='Adicione aqui sua seção de treino'
        title='Seção de treino'
        key={'section-register'}
        onSubmit={(event) => {
          event.preventDefault()
          setFormSection({ workout: workoutId, title: sectionTitle })
          addSection(event)
        }}
        isOpen={isRegisterSectionModalOpen === workoutId}
        onOpenChange={(isOpen) => {
          setIsRegisterSectionModalOpen(isOpen ? workoutId : null)
          if (isOpen) {
            setSectionTitle('')
          }
        }}
      >
        <div className="grid grid-cols-6 items-center gap-4">
          <Label htmlFor="section-title" className="text-right">
            Título
          </Label>
          <Input
            id="section-title"
            key={`section-title-${workoutId}`}
            className="col-span-5"
            value={sectionTitle}
            onChange={e => setSectionTitle(e.target.value)}
          />
        </div>
      </ModalRegister>
    )
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <ModalRegister
          buttonTitle='ADICIONAR TREINO'
          description='Adicione aqui seu planner de treino'
          title='Treino'
          key={'workout-register'}
          onSubmit={addWorkout}
          isOpen={isRegisterWorkoutModalOpen}
          onOpenChange={setIsRegisterWorkoutModalOpen}
        >
          <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Título
            </Label>
            <Input
              id="title"
              className="col-span-5"
              value={workoutTitle}
              onChange={e => setWorkoutTitle(e.target.value)}
            />
          </div>
        </ModalRegister>
      </div>
      <div className='flex gap-5 justify-between h-full'>
        {workouts.map(workout => (
          <div key={workout.id} className='p-2 flex flex-col gap-3 flex-1'>
            <div className='font-bold flex justify-between items-center'>
              {workout.title}
              <ModalUpdate
                title='Atualize o título do treino'
                description='Ajuste aqui as informações do seu planner de treino'
                onSubmit={updateWorkout}
                key={'workout-update'}
                onDelete={deleteWorkout}
                icon={<Ellipsis className="size-5" />}
                isOpen={isUpdateModalOpen === workout.id}
                onOpenChange={(isOpen) => {
                  setIsUpdateModalOpen(isOpen ? workout.id : null)
                  if (isOpen) {
                    setFormUpdateWorkout({ id: workout.id, title: workout.title })
                  }
                }}
              >
                <div className="grid grid-cols-6 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Título
                  </Label>
                  <Input
                    id="title"
                    className="col-span-5"
                    value={formUpdateWorkout.title || ''}
                    onChange={e => setFormUpdateWorkout(prev => ({
                      ...prev,
                      title: e.target.value,
                    }))}
                  />
                </div>
              </ModalUpdate>
            </div>
            <div className="w-full h-px bg-zinc-700" />
            <div className='scrollbar-custom px-2 flex flex-col h-full overflow-y-auto'>
              {workout.sections.length === 0 ? (
                <div className='w-full h-60 bg-amber-700 rounded-md p-2 items-center flex justify-center'>
                  <button
                    className='font-semibold hover:underline'
                    onClick={() => {
                      setSelectedWorkoutId(workout.id)
                      setIsRegisterSectionModalOpen(workout.id)
                    }}
                  >
                    Sem seções de treinos registradas
                  </button>
                </div>
              ) : (
                <div className='flex flex-col gap-4'>
                  {workout.sections.map((section, index) => (
                    <div
                      key={section.id}
                      className='bg-zinc-800 p-3 rounded-md'
                    >
                      <div className='font-bold flex justify-between items-center'>
                        {`${index + 1} - ${section.title}`}
                        <ModalUpdate
                          title='Atualize o título da seção'
                          description='Ajuste aqui as informações da seção do seu treino'
                          onSubmit={updateSection}
                          key={'section-update'}
                          onDelete={deleteSection}
                          icon={<Edit className="size-5" />}
                          isOpen={isUpdateModalOpen === section.id}
                          onOpenChange={(isOpen) => {
                            setIsUpdateModalOpen(isOpen ? section.id : null)
                            if (isOpen) {
                              setFormSection({ id: section.id, title: section.title, workout: workout.id })
                            }
                          }}
                        >
                          <div className="grid grid-cols-6 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                              Título
                            </Label>
                            <Input
                              id="title"
                              className="col-span-5"
                              value={formSection.title || ''}
                              onChange={e => setFormSection(prev => ({
                                ...prev,
                                title: e.target.value,
                              }))}
                            />
                          </div>
                        </ModalUpdate>
                      </div>
                      <div className="w-full h-px bg-zinc-700 my-2" />
                      <div className='flex flex-col gap-2'>
                        {section.exercises.map(exercise => (
                          <div
                            key={exercise.id}
                            className='bg-zinc-700 p-3 rounded-md flex justify-between items-center'
                          >
                            <div className='flex flex-col flex-1'>
                              <span className='font-bold'>{exercise.title}</span>
                              <span className='text-sm text-zinc-400 flex-wrap'>{exercise.label}</span>
                            </div>
                            <div className='items-center flex gap-2'>
                              <button
                                onClick={async () => {
                                  await api.put(`/p/exercises/${exercise.id}/`, {
                                    status: !exercise.status,
                                    title: exercise.title,
                                    section: exercise.section
                                  })

                                  fetchWorkouts()
                                }}
                              >
                                {exercise.status ? <CircleCheck className='size-5 bg-green-600 rounded-full' /> : <Circle className='size-5 rounded-full' />}
                              </button>

                              <ModalUpdate
                                title='Atualize o título da seção'
                                description='Ajuste aqui as informações da seção do seu treino'
                                onSubmit={updateExercise}
                                key={'exercise-update'}
                                onDelete={deleteExercise}
                                icon={<PencilLineIcon className="size-3" />}
                                isOpen={isUpdateModalOpen === exercise.id}
                                onOpenChange={(isOpen) => {
                                  setIsUpdateModalOpen(isOpen ? exercise.id : null)
                                  if (isOpen) {
                                    setFormExercise({ id: exercise.id, title: exercise.title, section: section.id })
                                  }
                                }}
                              >
                                <div className="grid grid-cols-6 items-center gap-4">
                                  <Label htmlFor="title" className="text-right">
                                    Título
                                  </Label>
                                  <Input
                                    id="title"
                                    className="col-span-5"
                                    value={formExercise.title || ''}
                                    onChange={e => setFormExercise(prev => ({
                                      ...prev,
                                      title: e.target.value
                                    }))}
                                  />
                                  <Label htmlFor="label" className="text-right">
                                    Descrição
                                  </Label>
                                  <Textarea
                                    id="label"
                                    className="col-span-5"
                                    value={formExercise.label || ''}
                                    onChange={e => setFormExercise(prev => ({
                                      ...prev,
                                      label: e.target.value
                                    }))}
                                  />
                                </div>
                              </ModalUpdate>
                            </div>
                          </div>
                        ))}
                        <ModalRegister
                          buttonTitle=''
                          description='Adicione aqui seu exercício de treino'
                          title='Exercício'
                          key={'exercise-register'}
                          onSubmit={addExercise}
                          isOpen={isRegisterExerciseModalOpen === section.id}
                          onOpenChange={(isOpen) => {
                            setIsRegisterExerciseModalOpen(isOpen ? section.id : null)
                            if (isOpen) {
                              setFormExercise({ section: section.id, title: '', label: '', status: false })
                            }
                          }}
                        >
                          <div className="grid grid-cols-6 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                              Título
                            </Label>
                            <Input
                              id="title"
                              className="col-span-5"
                              value={formExercise.title}
                              onChange={e => setFormExercise(prev => ({
                                ...prev,
                                title: e.target.value
                              }))}
                            />
                            <Label htmlFor="label" className="text-right">
                              Descrição
                            </Label>
                            <Textarea
                              id="label"
                              className="col-span-5"
                              value={formExercise.label}
                              onChange={e => setFormExercise(prev => ({
                                ...prev,
                                label: e.target.value
                              }))}
                            />
                          </div>
                        </ModalRegister>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <ModalAddSection workoutId={workout.id} />
          </div>
        ))}
      </div>
    </div >
  )
}
