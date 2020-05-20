import dayjs from 'dayjs'

const headers = [
  { text: '発表番号', value: '発表番号' },
  { text: '発症日', value: '発症日' },
  { text: '職業', value: '職業' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' },
  { text: '退院', value: '退院', align: 'center' }
]

type DataType = {
  No: number
  リリース日: Date | string
  職業: string | null
  年代: string | null
  性別: '男性' | '女性'
  退院: '◯' | null
  [key: string]: any
}

type TableDataType = {
  発表番号: number
  発症日: string
  職業: DataType['職業']
  年代: DataType['年代']
  性別: DataType['性別'] | '不明'
  退院: DataType['退院']
}

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
}

export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: []
  }
  data.forEach(d => {
    const TableRow: TableDataType = {
      発表番号: d.No,
      発症日: (d['リリース日'] == null) ? '不明' : ( d['リリース日'] == "調査中") ? '調査中' : (dayjs(d['リリース日']).format('MM/DD') == "Invalid Date") ? '不明' : dayjs(d['リリース日']).format('MM/DD') == "") ,
      職業: d['職業'] ?? '不明',
      年代: d['年代'] ?? '不明',
      性別: d['性別'] ?? '不明',
      退院: d['退院']
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1))
  return tableDate
}
