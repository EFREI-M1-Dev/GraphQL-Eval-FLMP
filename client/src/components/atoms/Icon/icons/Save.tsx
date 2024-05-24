type SaveProps = React.SVGProps<SVGSVGElement> & {
  color?: string
}

const Save = ({ color = '#000', ...props }: SaveProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 25 25"
      fill={color}
      {...props}
      aria-label="Add to list bookmark button"
    >
      <path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"></path>
    </svg>
  )
}

export default Save
