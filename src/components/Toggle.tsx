type TogglePropsType = {
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    initial: boolean,
}


const Toggle = ({ onChange, initial=false }: TogglePropsType) => {

    return (
        <div className="relative h-8 flex items-center">
            <input 
                type="checkbox" 
                className="toggleCheckbox sr-only peer" 
                onChange={onChange}
                checked={initial}
            />
            <div className={`toggle w-9 h-5 mr-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[50%] after:-translate-y-[50%] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500`} />
        </div>
    )
}

export default Toggle