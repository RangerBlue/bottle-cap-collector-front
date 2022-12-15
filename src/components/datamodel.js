import React from 'react'

const DataModel = ({ items }) => {
    return (
        <div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item active">{items[0].tittle}</li>
                    {items.slice(1).map(item => (
                        <li class="list-group-item">{item.elem}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DataModel