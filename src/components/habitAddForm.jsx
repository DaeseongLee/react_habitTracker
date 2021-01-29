import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    inputRef = React.createRef();
    formRef = React.createRef();
    handleSubmit = (event) => {
        event.preventDefault();
        const value = this.inputRef.current.value;
        value && this.props.onAdd(value);
        this.formRef.current.reset();
    }
    render() {
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.handleSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;