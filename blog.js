// fungsionalitas
// menambahkan
// menampilkan blog

let blogs = []

function addBlog(e){


    //prevent page refresh
    e.preventDefault()
    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')

    if(!title || !content || !image.value){
        alert('Semua Input Harus Diisi')
    } else{
        //handle for store data
        let imageURL = URL.createObjectURL(image.files[0])
        //make object

        let blog = {
            author: 'Fakhri Zain',
            title: title,
            content: content,
            image: imageURL,
            postedAt: new Date()
        }

        // memasukkan 
        blogs.push(blog) 
          localStorage.setItem("blogs", JSON.stringify(blogs))
    }

    renderBlog()
}

function renderBlog() {
  const blogs = JSON.parse(localStorage.getItem("blogs"))
    console.table(blogs)

    
    let blogContainer = document.getElementById('contents')
    

    if(blogs.length < 1){
        blogContainer.innerHTML= `
        <div>
        <img src="images/undraw_no_data_re_kwbl.svg">
        </div>
        `
    }else{
blogContainer.innerHTML = ""
    for (let i = 0; i < blogs.length; i++){
        console.log(blogs[i])

        blogContainer.innerHTML += `
        <div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[i].title}</a
            >
          </h1>
          <div class="detail-blog-content">
            ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
          </div>
          <p>
            ${blogs[i].content}
          </p>

          <div style="text-allign:right;">
          <span> ${getDistanceTime(blogs[i].postedAt)}
          </span>
          </div>

        </div>
      </div>`
    }
  }
}

//create feature

//create function to generate time
// take part of time (date,month,year,hour,minute)
//return formatted time

function getFullTime(time){
  time = new Date(time)
  const day = time.getDay()
  const date = time.getDate()
  const monthIdx = time.getMonth()
  const year = time.getFullYear()

  const hour = time.getHours()
  const minute = time.getMinutes()
  console.table({
    day,date,monthIdx,year,hour,minute
  })

  const month = [
    "January",
    "February",
    "March",
    "April",
    "Mei",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

  return `${days[day]}, ${date} ${month[monthIdx]} ${year} ${hour}:${minute < 10 ? `0${minute}`:minute} WIB`
}

function getDistanceTime(time){
  const distance = new Date() - new Date(time)

  const milisecond = 1000
  const secondINHour = 3600
  const hoursInDay = 24

  const dayDistance = distance / (milisecond * secondINHour * hoursInDay)

  if(dayDistance >= 1){
    return `${dayDistance} day ago`
  }else{
    const hourDistance = Math.floor(distance / (secondINHour * milisecond))
    if(hourDistance >= 1){
      return `${hourDistance} hour ago`
    }else{
      const minuteDistance = Math.floor(distance / (60 * milisecond))
      if (minuteDistance >= 1) {
        return `${minuteDistance} minute ago`;
      } else {
        const secondDistance = Math.floor(distance / milisecond); //get distance time (second)
        return `${secondDistance} second ago`;
      }
    }
  }

}


setInterval(function () {
  renderBlog()
}, 1000)
