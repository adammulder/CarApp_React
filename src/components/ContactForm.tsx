import Input from "./Input"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseYear, chooseMake, chooseModel, chooseColor } from "../redux/slices/RootSlices"



interface ContactFormProps {
    id?: string[]
    
}

const ContactForm = (props: ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${data.name} ${props.id}`)
        setTimeout(() => {window.location.reload()}, 1000);
        event.target.reset()
    } else {
        // Use dispatch to update our state in our store
        dispatch(chooseYear(data.year));
        dispatch(chooseMake(data.make));
        dispatch(chooseModel(data.model));
        dispatch(chooseColor(data.color));

        server_calls.create(store.getState())
        setTimeout(() => {window.location.reload()},1000)
    }
  }

  return (

    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="p-4" htmlFor="year"></label>
                <Input {...register('year')} name='year' placeholder="Year" label="Year" />
            </div>
            <div>
                <label className="p-4" htmlFor="make"></label>
                <Input {...register('make')} name='make' placeholder="Make" label="Make"/>
            </div>
            <div>
                <label className="p-4" htmlFor="model"></label>
                <Input {...register('model')} name='model' placeholder="Model" label="Model"/>
            </div>
            <div>
                <label className="p-4" htmlFor="color"></label>
                <Input {...register('color')} name='color' placeholder="Color" label="Color"/>
            </div>
            <div className="flex p-1">
                <button
                className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm