const Create_Chama = () => {
    return (
        <div>
            <h2>Create New Chama</h2>
            <hr />
            <form>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                    <input name="name" placeholder="Chama Name" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" />
                    </div>
                </div>
                <label className="block text-sm font-medium text-gray-700">Chama Description</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                <textarea name="description" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Add description here" />
                </div>
                <br/>
                <br/>
                <br/>
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded"> Create</button>
            </form>
        </div>
    )
}

export default Create_Chama
