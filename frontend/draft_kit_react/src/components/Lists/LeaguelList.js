import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

class LeagueList extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.leagues}>
          <TableHeaderColumn isKey dataField='id'> ID </TableHeaderColumn>
          <TableHeaderColumn dataField='name'> Name </TableHeaderColumn>
          <TableHeaderColumn dataField='drafter'> Drafter </TableHeaderColumn>
          <TableHeaderColumn dataField='draft_type'> Draft Type </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default LeagueList