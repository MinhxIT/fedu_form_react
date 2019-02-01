import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Thêm mới user vào hệ thống</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" name="name"  placeholder="Tên" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="phone"  placeholder="SĐT" />
                        </div>
                        <div className="form-group">
                            <div className="btn btn-primary">Thêm mới</div>
                        </div>  
                    </div> 
                </div>
            </div>   
        );
    }
}

export default AddUser;