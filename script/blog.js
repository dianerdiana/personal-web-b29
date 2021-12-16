// //Array
// //Array Index start from 0 (zero)

// let names = ["Ajeng", "Delisa", "Risna", "Sekar"]

// console.log(names)
// console.log(names[0])
// console.log(names[1])

// let dataObject1 = {
//     name: "Ajeng",
//     address: "Jakarta",
//     gender: "Female",
//     "email address": "ajeng01@gmail.com"
// }

// let dataObject2 = {
//     name: "Delisa",
//     address: "Majalengka",
//     gender: "Female"
// }

// // 2 ways to calling property of object
// console.log(dataObject1["email address"])
// console.log(dataObject2.gender)

// //Data of Object

// let allDatas = [{
//     name: "Yoga",
//     address: "Tasikmalaya"
//     }, 
//     {
//     name: "Yovi",
//     address: "Cilacap"
//     },
//     dataObject2
// ]

// console.log(allDatas)

let blogs = []

function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("input-blog-title").value;
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image")

    image = URL.createObjectURL(image.files[0])

    let blog = {
        title: title,
        content: content,
        image: image,
        author: "Dian Erdiana",
        postAt: new Date()
    }
    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let contentContainer = document.getElementById("contents");

    contentContainer.innerHTML = "";

    for (let i = 0; i < blogs.length; i++) {
        contentContainer.innerHTML += 
        `
            <div class="blog-list-item">
            <div class="blog-image">
                <img src="${blogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
                </div>
                <h2>
                <a href="blog-detail.html" target="_blank"
                    >${blogs[i].title}</a
                >
                </h2>
                <div class="detail-blog-content">
                  ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
                </div>
                <p>${blogs[i].content}</p>
                <div style="text-align: right; font-size: 15px; color: grey;">
                    ${getDistanceDate(blogs[i].postAt)}
                </div>
            </div>
            </div>
        `
    }
}

let month = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function getFullTime(time) {
    
    let date = time.getDate(); //tanggal getDate()
    let monthIndex = time.getMonth();//Bulan getMonth()
    let year = time.getFullYear()//Tahun getFullYear()

    let hours = time.getHours() //Jam getHours()
    let minutes = time.getMinutes() //Menit getMinutes()

    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

    return fullTime
}

function getDistanceDate(time) {

    let timePost = time
    let timeNow = new Date()
    
    let distance = timeNow - timePost;

    let milliSecond = 1000 // milisecond in 1 second
    let secondInHours = 3600 // second in 1 hour
    let hoursInDay = 23 // hours in 1 day

    let distanceDay = Math.floor(distance / (1000 * 3600 * 23))

    if (distanceDay >= 1) {
        return `${distanceDay} days ago`
    } else {
        //convert to hours
        let distanceHours = Math.floor(distance / (1000 * 3600))

        if (distanceHours >= 1) {
            return`${distanceHours} hours ago`
        } else {
            //convert to minutes
            let distanceMinutes = Math.floor(distance / (1000 * 60))

            if (distanceMinutes) {
                return `${distanceMinutes} minutes ago`
            } else {
                let distanceSecond = Math.floor(distance / 1000)
                
                return `${distanceSecond} seconds ago`
            }
        }
    }
}

setInterval(() => {
    
    renderBlog()

}, 1000)

