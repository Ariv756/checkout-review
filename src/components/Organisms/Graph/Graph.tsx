import useSWR from 'swr';
import {fetcher} from '../../../utils/fetcher/fetcher';

const Graph = () => {
    const { data } = useSWR(`http://localhost:3030/ratings/?average=true`, fetcher, {suspense: true});
    const ratingData = (data) && data.ratingData;
    const averageData = (data) && Math.round(data.averageData * 10) / 10 ;

    return (
      <div className='flex flex-col gap-2'>
        <p className='text-2xl text-bold self-end py-2'>{averageData} of 5</p>

        {ratingData?.map((rating:number, index:number) => (
          <div
            key={`${index}-${rating}`}
            className="flex gap-4"
          >
            <span className='min-w-[50px] pointer-events-none'>
               {index + 1} Star
             </span>
             <span className='w-full flex items-center pointer-events-none bg-slate-50 rounded'>
              <span
                style={{width: `${rating}%`}}
                className={`bg-yellow-400 h-5 flex rounded`} ></span>
            </span>
          </div>
        ))}
      </div>
    )
}

export default Graph;