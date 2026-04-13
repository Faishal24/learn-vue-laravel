export const contacts: Contact[] = [
    {
        id: 1,
        name: 'Alice Johnson',
        avatar: '',
        initials: 'AJ',
        messages: [
            { id: 1, text: 'Halo, bisa bantu aku?', time: '10:20', direction: 'received' },
            { id: 2, text: 'Tentu, ada apa?', time: '10:25', direction: 'sent' },
            { id: 3, text: 'Oke, nanti aku kirim filenya ya', time: '10:30', direction: 'received' },
        ],
    },
    {
        id: 2,
        name: 'Bob Smith',
        avatar: '',
        initials: 'BS',
        messages: [
            { id: 1, text: 'Meeting jam 3 sore ya', time: '09:15', direction: 'received' },
            { id: 2, text: 'Siap, aku join nanti', time: '09:18', direction: 'sent' },
        ],
    },
    {
        id: 3,
        name: 'Charlie Brown',
        avatar: '',
        initials: 'CB',
        messages: [
            { id: 1, text: 'Deploy udah jalan?', time: '14:00', direction: 'sent' },
            { id: 2, text: 'Sudah selesai deploy ke production', time: '14:05', direction: 'received' },
            { id: 3, text: 'Mantap, thanks!', time: '14:06', direction: 'sent' },
        ],
    },
    {
        id: 4,
        name: 'Diana Ross',
        avatar: '',
        initials: 'DR',
        messages: [
            { id: 1, text: 'Thanks for the help! 🙏', time: '16:30', direction: 'received' },
        ],
    },
    {
        id: 5,
        name: 'Edward Chen',
        avatar: '',
        initials: 'EC',
        messages: [
            { id: 1, text: 'PR sudah aku push', time: '11:00', direction: 'sent' },
            { id: 2, text: 'PR sudah di-review, LGTM', time: '11:45', direction: 'received' },
        ],
    },
];
