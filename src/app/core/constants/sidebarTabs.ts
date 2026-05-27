import { TreeNode } from "primeng/api";

export const sideTabs : TreeNode[] = [
    {
        key : '0',
        label: 'Women',
        selectable: false,
        children: [
            { key: '0-0',label: 'Shirts' },
            { key: '0-1', label: 'Pants' },
            { key: '0-2', label: 'Hoodies' },
            { key: '0-3', label: 'Sets' },
            { key: '0-4', label: 'Bras' },
            { key: '0-5', label: 'Shorts' }
        ]
    },
    {
        key: '1',
        label: 'Men',
        selectable: false,
        children: [
            { key: '1-0', label: 'Shirts' },
            { key: '1-1', label: 'Pants' },
            { key: '1-2', label: 'Hoodies' },
            { key: '1-3', label: 'Sets' },
            { key: '1-4', label: 'Shorts' },
            { key: '1-5', label: 'Compression' },
            { key: '1-6', label: 'Jackets' },
        ]
    },
    {
        key: '2',
        label: 'Kits',
        selectable: false
    },
    {
        key: '3',
        label: 'Accessories',
        selectable: false
    },
    {
        key: '4',
        label: 'Balls',
        selectable: false
    },
    {
        key: '5',
        label: 'Equipment',
        selectable: false
    },
    {
        key: '6',
        label: 'Shoes',
        selectable: false
    },
    {
        key: '7',
        label: 'Trophies',
        selectable: false
    },
    {
        key: '8',
        label: 'OnSale',
        selectable: false
    },
    {
        key: '9',
        label: 'New Arrivals',
        selectable: false
    }
];