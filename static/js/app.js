// Import data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a table
function buildTable(data) {

    // Clear the existing data, if any
    // Tell JS to use an empty string when creating a table --> blank canvas
        // This is also the standard way to clear data
    tbody.html("");


    // Loop through data array and add rows of data to the table
    data.forEach((dataRow) => {

        // Create a variable that will append a row to the table body
        // let is used because it is limited to this block of code
        let row = tbody.append("tr");

        // Loop through each field in the dataRow argument
        // Put each UFO sighting into its own row of data
        Object.values(dataRow).forEach((val) => {

            // Create a variable to append data to the table
            let cell = row.append("td");

            // Create a variable that holds only each value from the object
            cell.text(val);
            }
        );
    });
}

// Filter a table
function handleClick() {

    // Use D3.js library to equip website to listen for events, such as button clicks
    // Use .select() to select the first element that matches selector string "#datetime"
    // Tell D3 to look for date values stored on the webpage and grab that information and hold
    // it in the date variabe
    let date = d3.select("#datetime").property("value");

    // Set a default filter and save it to a new variable
    let filteredData = tableData;

    // Check for a date
    if (date) {

        // Apply thr filter to the table data
        // === checks for strict equality
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the tabke using the filtered data
    // If a date was not entered, the filteredData will be the original tableData
    buildTable(filteredData);
};

// Listen for a filter button click
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);