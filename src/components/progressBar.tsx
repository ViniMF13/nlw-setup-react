interface ProgressBarProps {
  progress: number
}

export function ProgressBar( props: ProgressBarProps ) {
  return(
      <div className='h-3 rounded-xl bg-zinc-700w-full mt-4'>
         <div
         role="progressbar"
         arid-aria-label='progresso de habitos'
         arid-aria-valuenow={props.progress}
         className="h-3 rounded-xl bg-violet-600"
         style={{ width: `${props.progress}%` }}
         >

         </div>
      </div>
  )
}