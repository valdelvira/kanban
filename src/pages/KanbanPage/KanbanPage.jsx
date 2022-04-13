import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

const itemsFromBackend = [
    { id: uuidv4(), content: 'First task' },
    { id: uuidv4(), content: 'Second task' },
    { id: uuidv4(), content: 'Third task' }
]

const columnsFromBackend =
{
    [uuidv4()]: {
        name: 'Requested',
        items: itemsFromBackend
    },
    [uuidv4()]: {
        name: 'To do',
        items: []
    },
    [uuidv4()]: {
        name: 'In progress',
        items: []
    },
    [uuidv4()]: {
        name: 'Done',
        items: []
    }
}

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return //check card destination is allowed
    const { source, destination } = result
    //check if drag to other column
    if (source.droppableId !== destination.droppableId) {
        const sourceCol = columns[source.droppableId]
        const destCol = columns[destination.droppableId]
        const sourceItems = [...sourceCol.items]
        const destItems = [...destCol.items]
        const [removed] = sourceItems.splice(source.index, 1)
        destItems.splice(destination.index, 0, removed)
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceCol,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destCol,
                items: destItems
            }
        })
    } else {
        const column = columns[source.droppableId]
        const copiedItems = [...column.items]
        const [removed] = copiedItems.splice(source.index, 1)
        copiedItems.splice(destination.index, 0, removed)
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        })
    }
}


const KanbanPage = () => {
    const [columns, setColumns] = useState(columnsFromBackend)
    console.log(columns)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                {
                    Object.entries(columns).map(([columnId, column]) => {
                        return (
                            <div key={columnId} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h2>{column.name}</h2>
                                <div style={{ margin: 8 }}>
                                    <Droppable droppableId={columnId} key={columnId} >
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                        padding: 4,
                                                        width: 250,
                                                        minHeight: 500
                                                    }}
                                                >
                                                    {
                                                        column.items.map((item, index) => {
                                                            return (
                                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                                    {(provided, snapshot) => {
                                                                        return (
                                                                            <div
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                                style={{
                                                                                    userSelect: 'none',
                                                                                    padding: 16,
                                                                                    margin: '0 0 8px 0',
                                                                                    minHeight: '50px',
                                                                                    backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                                                    color: 'white',
                                                                                    ...provided.draggableProps.style
                                                                                }}
                                                                            >
                                                                                {item.content}
                                                                            </div>
                                                                        )
                                                                    }}
                                                                </Draggable>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                        )
                    })
                }
            </DragDropContext>
        </div>
    )
}


export default KanbanPage