const getData = () => {
    const formData = {};
    document.querySelectorAll('input').forEach(input => {
        formData[input.name] = input.value;
    });
    return formData;
}

const saveCourse = async () => {
    //console.log(JSON.stringify(getData()));
    await fetch('/api/course/addCourse', {
        method: 'POST', 
        body: JSON.stringify(getData()),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    alert("Course Saved Successfully!");
    window.location.href = "/index1.html"
}

const resetForm = () => {
    document.querySelectorAll('input').forEach(input => input.value = '');
}