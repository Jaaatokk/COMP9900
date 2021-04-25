import React, { Component ,useState} from 'react';
import axios from 'axios';

// //
// const [success, setSuccess] =useState(false);
// const [warning, setWarning] = useState(false);
// const [message, setMessage] = useState('');
// const [info, setInfo] = useState(false);

class Gege extends Component {

  state = {
    item_name: '',
    item_des: '',
    item_price:'',
    author:'',
    category:'',
    image: null,
    success:false,
    warning:false,
    info:false,
    //
  };



  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  resetClick=()=>{
    this.setState({
      item_name:'',
      item_price:'',
      item_des:'',
      category:'',
      author:'',
      image:null,


    })
    // this.state.item_name('');
    // this.state.item_price('');
    // this.state.item_des('');
    // this.state.category('');
    // this.state.author('');
    // this.state.image(null)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('item_image', this.state.image, this.state.image.name);
    console.log(this.state.image.name)
    form_data.append('item_name', this.state.item_name);
    form_data.append('item_des', this.state.item_des);
    form_data.append('author', this.state.author);
    form_data.append('category', this.state.category);
    form_data.append('item_price', this.state.item_price);
    let url = 'http://127.0.0.1:8000/item/add/';
    if (this.state.item_name && (this.state.item_price>0)) {
      axios.post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
        .then(res => {
          // console.log(res.data);
          console.log(!this.state.success);

        })
        .catch(err => {
          console.log(err);
          // setWarning(!warning);
        })
    }
    // else{setMessage("Please provide all information.");
      // setInfo(!info);

    // }

  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='item_name' id='item_name' value={this.state.item_name} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="int" placeholder='item_price' id='item_price' value={this.state.item_price} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="text" placeholder='item_des' id='item_des' value={this.state.item_des} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="text" placeholder='author' id='author' value={this.state.author} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="text" placeholder='category' id='category' value={this.state.category} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="file"
                   id="item_image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>

        </form>
        <input type="reset" onClick={this.resetClick}/>
      </div>
    );
  }
}

export default Gege;
