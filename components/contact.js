const Contact = () => {
	return (
		<div className="section contact" id="contact">
      <div className="numbered-heading" style={{justifyContent: "center"}}>
        <span className="number">04.</span>
        <span className="title">Get In Touch</span>
      </div>
			<div>
				I am currently looking for my first full-time software engineering position. I am open to both front-end or back-end opportunities. If you have any question, please don&apos;t hesitate to contact me at <a href="mailto:evie.delannoy@gmail.com"><span className="text-highlight">evie.delannoy@gmail.com<span className="text-color-normal">!</span></span></a>
			</div>
			<a href="Evie+Song+Resume.pdf" target="_blank"><div className={`resume-link`} style={{width: "300px"}}>Check out my resume!</div></a>

		</div>
	)
}

export default Contact