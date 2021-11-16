import React from 'react';
import '../index.css'

export const Book = React.memo((props) => {
  //spread doesn't work: {autor, image, description, title}
  const { image, autor, description, title } = props.book;
  const [blablaState, setBlablaState] = React.useState(0);

  React.useEffect(() => {
    console.log('Book.useEffect[] has been invoked');
    return () => {
      console.log('Book.useEffect[] will be unmounted');
    };
  }, []);

  const showDetails = () => {
    alert(description)
  };

  const addStateNumber = () => {
    // alert(description);
    setBlablaState((prevState) => prevState + 1);
  };
  console.log('Render method has been invoked');
  return (
    <section className="book">
      <h4> {title}</h4>
      <img src={image} alt="image of the Book"></img>
      <p>
        <h5>Author: {autor}</h5>
        <p><h6>current number: {blablaState}</h6>
        <button onClick={addStateNumber}>Add number</button></p>
        <button onClick={showDetails}>
          show description
        </button>
      </p>
    </section>
  );
});

export class BookClass extends React.PureComponent {
  state = {
    blablaState: 0
  };

  addStateNumber = () =>{
    this.setState({
      blablaState: this.state.blablaState + 1
    })
  }
  showDetails = () => {
    alert(this.description)
  };

  componentDidMount() {
    console.log('BookClass.componentDidMount has been invoked');
    setTimeout(() => {
      this.setState({
        blablaState: 1000
      });
    }, 5000);
  }

  render() {
    const { image, autor, description, title } = this.props.book;
    console.log('Render method has been invoked');
    return (
      <section className="book">
        <h4>{title} - Book Class</h4>
        <img src={image} alt="image of the Book"></img>
        <p>
          <h5>Author {this.state.blablaState}</h5>
          {autor}
          <br />
          <button onClick={this.showDetails}>
            show description
          </button>
          <button onClick = {this.addStateNumber}>Just add a number with the state (Hooks)</button>
        </p>
      </section>
    );
  }
}