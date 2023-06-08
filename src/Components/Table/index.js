export const Table = (props) => {
    const { tableHeaderObject, tableData, tableDataAccessors, booleanKey, booleanKeyAccessor } = props;
    return (
        <div class="table-responsive">
            <table class="table table-striped table-bordered custom-table">
                <thead>
                    <tr>
                        {
                            tableHeaderObject.map((item, index) => {
                                return <th key={index}>{item}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item, index)=>
                            <tr key={index}>
                                {
                                    tableDataAccessors.map((accessor, idx) => {
                                        return (
                                            <td 
                                                key={idx} 
                                                className={`${(accessor === booleanKeyAccessor) ? item[booleanKey] ? 'tran-success' : 'tran-fail' : ''}`}
                                            >
                                                {item[accessor]}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}