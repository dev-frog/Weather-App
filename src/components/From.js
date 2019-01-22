import React from 'react';

class From extends React.Component{
    render(){
        return <div>
            <form onSubmit={this.props.getWather}>
              <input type="text" name="city" placeholder="City" />
              <input type="text" name="country" placeholder="country" />
              <input type="submit" value="Submit" />
            </form>
          </div>;
    }
}

export default From;