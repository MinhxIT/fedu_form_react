import React, { Component } from 'react';

class SearchForm extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">  
                        <input type="text" className="form-control" name="" placeholder="Nhập từ khóa cần tìm" style={{width: 610}} />
                        <div className="btn btn-info">Tìm</div>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;