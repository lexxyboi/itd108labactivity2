// Your existing imports and configuration code...

const db = getFirestore(app);

function getDataFromFirestore() {
  var collectionRef = collection(db, 'gamedb');

  collectionRef.get().then(function (querySnapshot) {
    var tableData = []; // Array to store the table data

    querySnapshot.forEach(function (doc) {
      // Access the document data and add it to the tableData array
      var data = doc.data();
      tableData.push([
        data.Name || '',
        data.Genre || '',
        data.Platform || '',
        data.Year || ''
      ]);
    });

    $('#example').DataTable({
      data: tableData,
      columns: [
        { title: 'Name' },
        { title: 'Genre' },
        { title: 'Platform' },
        { title: 'Year' }
      ]
    });
  }).catch(function (error) {
    console.log("Error getting documents: ", error);
  });
}

// Your existing event listeners and code...

// Call the getDataFromFirestore function to populate the table when the document is ready
$(document).ready(function () {
  getDataFromFirestore();
});
