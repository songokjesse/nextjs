import { useForm } from 'react-hook-form'
const Create_Chama = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = formData => {
        alert(JSON.stringify(formData))
    }
    return (
        <div>
            <h2>Create New Chama</h2>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*<input name="name" ref={...register({ required: true})}/>*/}
                {errors.name && <span>This email is required</span>}

                <textarea name="description"></textarea>
                <button> Create</button>
            </form>
        </div>
    )
}

export default Create_Chama
