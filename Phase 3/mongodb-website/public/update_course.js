const getData = () => {
    const formData = {};
    document.querySelectorAll('input').forEach(input => {
        formData[input.name] = input.value;
    });
    return formData;
}

const updateCourse = async () => {
    //console.log(JSON.stringify(getData()));
    await fetch('/api/course/updateCourse', {
        method: 'PUT', 
        body: JSON.stringify(getData()),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    alert("Course Updated Successfully!");
    window.location.href = "/index1.html"
}

const resetForm = () => {
    document.querySelectorAll('input').forEach(input => input.value = '');
}