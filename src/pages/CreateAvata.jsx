import React,{useState , useEffect , useRef} from 'react'
import '../styles/create-avata.css'
import { Link } from 'react-router-dom'
const CreateAvata = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [data , setData] = useState();
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])


    const canvasRef = useRef(null);
      useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let base_image = new Image();
          base_image.src = preview ;
          base_image.className = "img-avata";
          base_image.id = "input_img";
          base_image.onload = ()=>{
            let wrh = base_image.width / base_image.height;
            let newWidth = canvas.width;
            let newHeight = newWidth / wrh;
            if (newHeight > canvas.height) {
                        newHeight = canvas.height;
                newWidth = newHeight * wrh;
            }
            
            let xOffset = newWidth < canvas.width ? ((canvas.width - newWidth) / 2) : 0;
            let yOffset = newHeight < canvas.height ? ((canvas.height - newHeight) / 2) : 0;
            
          ctx.drawImage(base_image, xOffset , yOffset  , newWidth , newHeight);
          setData(canvas.toDataURL('image/png'))
          }
      }, [preview]);
      
      const saveLocal = ()=>{
        localStorage.setItem('state', `${data}`);
      }
      saveLocal();

    const onSelectFileFinal = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
      }

      const onSelectFileFrame = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
      }

      // gửi data canvas lên url
  return (
    <form>
    {/* {selectedFile && <img src={preview} alt=""/>} */}

    <div className='container__avata'>
        <div className='img__box'>
            <Link to={`/home/custem`}>
              <canvas id='canvas' ref={canvasRef} width={500} height={500}></canvas>
            </Link>
        </div>
       <div className='container__input'>
            <label>Chọn avata</label>
            <input 
              type='file' 
              name='photo' 
              id='upload-photo' 
              accept='image/*' 
              onChange={onSelectFileFinal}/> 
              
            <label>Chọn farme</label>
            <input 
              type='file' 
              placeholder='Chọn farme' 
              name='farme' 
              id='upload-farme' 
              accept='image/*'
              onChange={onSelectFileFrame}
              />
            <button className='btn-success' onClick={e => {
                const canvas = canvasRef.current;
                const dataUrl = canvas.toDataURL();
                  // create a tag
                  const a = document.createElement('a');
                  a.download = 'download.png';
                  a.href = dataUrl;
                  a.click();
}

            }>Save</button>
       </div>
    </div>
    </form>

  )
}

export default CreateAvata