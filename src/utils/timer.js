import dayjs from 'dayjs'
export default function timer(timer, type='all'){
	return dayjs(timer).format(type === 'all' ? 'YYYY-MM-DD HH:mm:ss': 'YYYY-MM-DD')
}