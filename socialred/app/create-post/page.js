import { error } from 'console';
import { read } from 'fs';
import { func } from 'prop-types'
import React from 'react'

const CreateDonut = () => {

    function convert(e){
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {

        }
        reader.onerror = error => {
            console.log("Error", error)
        }

    }
  return (
    <section>
        <h2>Donut Post</h2>
        <form>
            <input
             accept='image/'
             type='file'
             onChange={convert}
            />
        </form>
    </section>
  )
}

export default CreateDonut