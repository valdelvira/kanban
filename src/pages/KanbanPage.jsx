import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

const itemsFromBackend = [
    { id: uuidv4(), content: 'First task' },
    { id: uuidv4(), content: 'Second task' },
    { id: uuidv4(), content: 'Third task' }
]

const columnsFromBackend = [
    {
        [uuidv4()]: {
            name: 'Todo',
            items: itemsFromBackend
        }
    }
]

const KanbanPage = ()  => {
    const [ columns, setColumns ] = useState(columnsFromBackend)

    return (  
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
            <DragDropContext onDropEnd={ res => console.log(res) }>
                {
                    Object.entries(columns).map(([id, column])) => {
                        return (
                            <Droppable droppableId={id}>
                                {()}
                            </Droppable>
                        )
                    }
                }
            </DragDropContext>
        </div>
    )
}

export default KanbanPage