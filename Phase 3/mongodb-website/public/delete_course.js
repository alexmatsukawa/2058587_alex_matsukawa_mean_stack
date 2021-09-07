const getData = () => {
    const formData = {};
    document.querySelectorAll('input').forEach(input => {
        formData[input.name] = input.value;
    });
    return formData;
}

const deleteCourse = async () => {
    var cdata = getData();
    //console.log(cdata);
    var cid = cdata._id;
    console.log(cid);
    await fetch(`/api/course/deleteCourse/${cid}`, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json'
        }
    });
    alert("Course Deleted Successfully!");
    window.location.href = "/index1.html"
}

const resetForm = () => {
    document.querySelectorAll('input').forEach(input => input.value = '');
}