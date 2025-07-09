import { type RepeatingProps } from './RepeatingBlockProps';

function RepeatingBlock({ image, children, settings }: RepeatingProps) {
	return (
		<div
			className={` bg-center bg-repeat w-full  ${
				settings?.flipImg == true ? 'rotate-180' : ''
			} ${settings?.positionAbsolute == true ? 'absolute' : 'relative'}`}
			style={{
				backgroundImage: `url('${image.src}')`,
				backgroundColor: `${image.bgColor}`,
				height: settings?.height,
				zIndex: settings?.zIndex,
				top: settings?.top,
			}}>
			{children}
		</div>
	);
}

export default RepeatingBlock;
