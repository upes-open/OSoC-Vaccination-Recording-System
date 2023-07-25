import React from 'react'

import './Dashboard.css'

function Dashboard() {
  let vaccineRedords = [
    {
      'id': 1,
      'name': 'Polio',
      'date': '12-12-2012',
      'status': 'pending'
    },
    {
      'id': 2,
      'name': 'Polio',
      'date': '12-12-2012',
      'status': 'pending'
    },
    {
      'id': 3,
      'name': 'Polio',
      'date': '12-12-2012',
      'status': 'pending'
    },
    {
      'id': 4,
      'name': 'Polio',
      'date': '12-12-2012',
      'status': 'pending'
    },
    {
      'id': 5,
      'name': 'Polio',
      'date': '12-12-2012',
      'status': 'pending'
    }
  ]
  return (
    <div className='body'>
        <div className='addRecods'>
            <h1>Add Vaccination Due and Details</h1>
            <div className='addRecodsForm'>
              <div class="mb-3">
                <label for="name" class="form-label">Vaccination Name</label>
                <input type="email" class="form-control" id="name" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="date" class="form-label">Date</label>
                <input type="date" class="form-control" id="date" />
              </div>
              <div className='btns'>
                <button type="submit" style={{backgroundColor:'#dc552c'}}  class="btn">Cancel</button>
                <button type="submit" style={{backgroundColor: '#404969'}} class="btn">Add</button>
              </div>
            </div>
        </div>
        <div className='searchRecods'>
            <div class="col-sm-9 mb-3">
                 <input type="text" class=" serachInput form-control" id="name" aria-describedby="searchbar" placeholder='Search for records....' />
            </div>
            <div style={{display:'flex'}} class="col-sm-4">
                <label  style={{width: '10rem'}} for="sort">Sort By: </label>
                <select class="form-select" id="sort">
                    <option selected>Choose...</option>
                    <option value="lat-old">latest to oldest</option>
                    <option value="old-lat">Oldest to latest</option>
                </select>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {vaccineRedords.map((record) => {
                  return (
                    <tr>
                      <th scope="row">{record.id}</th>
                      <td>{record.name}</td>
                      <td>{record.date}</td>
                      <td>{record.status}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

        </div>
    </div>
  )
}

export default Dashboard