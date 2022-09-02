import productos from './data.json';
import Item from './Item';

export default function Listado({agregarItem}) {
  return (
    <div className='container'>
      {productos.map((item => {
        return <Item
                  key={item.id}
                  nombre={item.producto.nombre}
                  descripcion={item.producto.descripcion}
                  stock={item.stock}
                  agregarItem={agregarItem}
                />
      }))}
    </div>
  )
}
