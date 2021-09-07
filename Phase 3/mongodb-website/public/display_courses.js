const getCourses = async () => {
    var courses = await fetch('/api/course/getCourseList');
    return courses.json();
}

const displayCourses = async () => {
    var cTable = document.getElementById("cBody");
    var courseData = await getCourses();
    console.log(courseData);
    for (var i = 0; i < courseData.length; i++) {
        cTable.innerHTML += '<tr><td>' + courseData[i]._id + '</td><td>' + courseData[i].cname + '</td><td>' + courseData[i].desc + '</td><td>' + courseData[i].cost + '</td></tr>';
    }
}