const handleEdit = () => {
    $('#summernote').summernote({
      placeholder: '프로젝트에 대한 설명을 적어주세요',
      tabsize: 2,
      height: 500,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['fullscreen', 'codeview', 'help']]
      ]
    });
  
    const saveButton = document.querySelector("#edit__save")
      saveButton.addEventListener("click", (e) => {
          if(!localStorage.getItem('j2kb-accessToken')) {
            alert("인증에 문제가 있습니다.")
            return
          }
  
          const token = localStorage.getItem('j2kb-accessToken')
  
          const thumbnail = document.querySelector("#thumbnail").files[0]
          if(!thumbnail) {
            alert("섬네일 파일이 필요합니다.")
            return
          }

          if(thumbnail.name.endsWith(".png") || thumbnail.name.endsWith(".jpg") || thumbnail.name.endsWith(".jpeg")) {
            const formdata = new FormData();
            formdata.append("image-file", thumbnail, thumbnail.name);
  
            const data = {}
            data.content = $('#summernote').summernote('code')
            data.title = document.querySelector("#edit__title").value
            data.summary = document.querySelector("#edit__title").value
            data.gisuId = 1
            data.teamId = 1

            console.log(JSON.stringify(data))
            formdata.append("json-data", JSON.stringify(data))        
  
            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow',
                headers: {
                  'Content-Type': 'multipart/mixed;charset=UTF-8;',
                  'Authorization': 'Bearer ' + token
              },
            };
            
            fetch("http://34.64.124.246:8080/api/v1/boards", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            
            //window.location = "/project"
            return
          }
  
          alert("jpg와 png파일만 업로드 가능합니다.")        
          
      })
  }

  module.exports = {
    handleEdit
  }