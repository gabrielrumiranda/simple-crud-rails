const NewFruit = (props) => {
    let formField = {};

    return (
        <form onSubmit={(e) => {
            props.handleFormSubmit(formField.name.value, formField.description.value); e.target.reset();
        }}>
            <input ref={input => formField.name = input} placeholder='Enter the name of item' />
            <input ref={input => formField.description = input} placeholder='Enter a description' />
            <button>Submit</button>
        </form>
    )
}