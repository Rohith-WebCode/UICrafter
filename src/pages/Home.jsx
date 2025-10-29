import { useNavigate } from 'react-router-dom';
import { components } from '../data/components'
import { useStore } from '../store/useStore';


const Home = () => {
  const navigate  = useNavigate()
    const setSelectedComponent = useStore((state) => state.setSelectedComponent)

    const buttonHandler = (data)=> {
      setSelectedComponent(data)
      navigate("/create")
    }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-10'>
       <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {components.map((data)=>(
              <div onClick={() => buttonHandler(data)} className='rounded-3xl border-b-blue-200 border items-center flex flex-col justify-center bg-[#0f0f0f] text-neutral-50 p-3' key={data.id}>
                <span className='text-amber-100 text-4xl'>{data.icon}</span>
                <p className=''>{data.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home