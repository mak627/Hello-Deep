function checkInputString() {
    let inputString = document.getElementById('firstname').value;
    if (inputString === "") {
        document.getElementById('erfirstname').style.display = 'block'
    }
    else {
        document.getElementById('erfirstname').style.display = 'none'
    }
};

function submitForm() {
    var fn = document.getElementById("firstname").value;
    var ln = document.getElementById("lastname").value;
    var em = document.getElementById("emailid").value;
    var gn = document.querySelector('input[name=gender]:checked').value;
    var adrs;
    if(gn === 'male')
     adrs = 'Mr.'
     else if (gn === 'female')
     adrs = 'Ms.'
     else
     adrs = '';
    document.getElementById("form-submit").innerHTML = adrs + fn + ln + 'your emailid is ' + em + '.Thank you for submission.';
};