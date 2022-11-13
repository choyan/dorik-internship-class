import {useState} from 'react'
import { useGetQuote, useGetQuotes } from './hooks/useQuotes'

export default function App () {
  const [currentId, setCurrentId] = useState(null);
  const { data, isLoading } = useGetQuotes();
  const {data: singleData, isLoading: singleLoading} = useGetQuote(currentId)

  const changeCurrentId = (id) => setCurrentId(id);

  return (
    <div>
      <h1>This is my App Component</h1>
      <div style={{
        display: 'flex'
      }}>
        {
        isLoading ? 'Loading.....' : (
          <ul style={{ width: '50%'}}>
            {
              data.map(quote => (
                <li key={quote._id} onClick={() => changeCurrentId(quote._id)} style={{
                  cursor: 'pointer',
                  marginTop: '15px'
                }}>
                  {quote.text}
                </li>
              ))
            }
          </ul>
        )
      }

      <div>
        {
          singleLoading ? 'Loading....' : (
            <p>{singleData.text}</p>
          )
        }
      </div>
      </div>

    </div>
  )
}