import { TreeNode } from "primeng/api";

export const sideTabs : TreeNode[] = [
    {
        key : '0',
        label: 'Women',
        selectable: false,
        data: 'women',
        children: [
            { key: '0-0',label: 'Shirts', data: 'women-shirts' },
            { key: '0-1', label: 'Pants', data: 'women-pants' },
            { key: '0-2', label: 'Hoodies', data: 'women-hoodies' },
            { key: '0-3', label: 'Sets', data: 'women-sets' },
            { key: '0-4', label: 'Bras', data: 'women-bras' },
            { key: '0-5', label: 'Shorts', data: 'women-shorts' }
        ]
    },
    {
        key: '1',
        label: 'Men',
        selectable: false,
        data: 'men',
        children: [
            { key: '1-0', label: 'Shirts', data: 'men-shirts' },
            { key: '1-1', label: 'Pants', data: 'men-pants' },
            { key: '1-2', label: 'Hoodies', data: 'men-hoodies' },
            { key: '1-3', label: 'Sets', data: 'men-sets' },
            { key: '1-4', label: 'Shorts', data: 'men-shorts' },
            { key: '1-5', label: 'Compression', data: 'men-compression' },
            { key: '1-6', label: 'Jackets', data: 'men-jackets' },
        ]
    },
    {
        key: '2',
        label: 'Kits',
        data: 'kits',
        selectable: false
    },
    {
        key: '3',
        label: 'Accessories',
        data: 'accessories',
        selectable: false
    },
    {
        key: '4',
        label: 'Balls',
        data: 'balls',
        selectable: false
    },
    {
        key: '5',
        label: 'Equipment',
        data: 'equipment',
        selectable: false
    },
    {
        key: '6',
        label: 'Shoes',
        data: 'shoes',
        selectable: false
    },
    {
        key: '7',
        label: 'Trophies',
        data: 'trophies',
        selectable: false
    },
    {
        key: '8',
        label: 'OnSale',
        data: 'onsale',
        selectable: false
    },
    {
        key: '9',
        label: 'New Arrivals',
        data: 'new-arrivals',
        selectable: false
    }
];