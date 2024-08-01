import { FormEvent, useEffect, useState } from 'react'
import { ModalRegister } from './components-ui/modal-register'
import { ModalUpdate } from './components-ui/modal-update'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { api } from "@/lib/axios"

interface Exercise {
    id: string
    title: string
    label: string
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

export function Kanban() {
    const [workouts, setWorkouts] = useState<Workout[]>([])
    const [workoutTitle, setWorkoutTitle] = useState<string>('')
    const [formUpdateWorkout, setFormUpdateWorkout] = useState<Partial<Workout>>({ id: '', title: '' })
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<string | null>(null)

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
            setIsRegisterModalOpen(false)

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

    return (
        <div>
            <div>
                <ModalRegister
                    buttonTitle='Adicionar Treino'
                    description='Adicione aqui seu planner de treino'
                    title='Treino'
                    key={'workout-register'}
                    onSubmit={addWorkout}
                    isOpen={isRegisterModalOpen}
                    onOpenChange={setIsRegisterModalOpen}
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
            <div className='flex gap-5 justify-between'>
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
                        {workout.sections.map(section => (
                            <div key={section.id} className='p-2 bg-zinc-800 rounded-md'>
                                {section.title}
                                {section.exercises.map(exercise => (
                                    <div key={exercise.id} className='p-2 bg-zinc-500 rounded-md'>
                                        {exercise.title}
                                    </div>
                                ))}
                            </div>

                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}