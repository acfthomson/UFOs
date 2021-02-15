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
}

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