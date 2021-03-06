var columnDefs = [
    {
        headerName: 'Athlete',
        children: [
            {field: 'athlete', width: 150},
            {field: 'age', lockVisible: true, cellClass: 'locked-visible'},
            {field: 'country', width: 150},
            {field: 'year'},
            {field: 'date'},
            {field: 'sport'}
        ]
    },
    {
        headerName: 'Medals',
        children: [
            {field: 'gold', lockVisible: true, cellClass: 'locked-visible'},
            {field: 'silver', lockVisible: true, cellClass: 'locked-visible'},
            {field: 'bronze', lockVisible: true, cellClass: 'locked-visible'},
            {field: 'total', lockVisible: true, cellClass: 'locked-visible', hide: true}
        ]
    }
];

var gridOptions = {
    columnDefs: columnDefs,
    sideBar: {
        toolPanels: [{
            id: 'columns',
            labelDefault: 'Columns',
            labelKey: 'columns',
            iconKey: 'columns',
            toolPanel: 'agColumnsToolPanel',
            toolPanelParams: {
                suppressRowGroups: true,
                suppressValues: true,
                suppressPivots: true,
                suppressPivotMode: true
            }
        }]
    },
    defaultColDef: {
        width: 100
    }
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    // do http request to get our sample data - not using any framework to keep the example self contained.
    // you will probably use a framework like JQuery, Angular or something else to do your HTTP calls.
    agGrid.simpleHttpRequest({url: 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'}).then(function(data) {
        gridOptions.api.setRowData(data);
    });
});
