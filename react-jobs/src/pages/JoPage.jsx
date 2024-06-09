import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const JoPage = () => {
    const { id } = useParams()
    const [job, setJob] = useState(null)

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/job/${id}`);
                const data = await res.json();
                setJob(data)
              } catch (error) {
                console.log('Error fetching data', error)
              } finally {
                setLoading(false)
              }
        }

        fetchJob()
    }, [])

  return (
    <div>
      
    </div>
  )
}

export default JoPage
