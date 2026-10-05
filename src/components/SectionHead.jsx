export default function SectionHead({
  eyebrow,
  title,
  text,
  center = false,
  action = null,
  id,
  className = '',
}) {
  return (
    <div className={`section__head${center ? ' section__head--center' : ''}${className ? ` ${className}` : ''}`}>
      <div className="section__head-main">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 id={id}>{title}</h2>
        {text && <p className="lead">{text}</p>}
      </div>
      {action && <div className="section__head-action">{action}</div>}
    </div>
  )
}