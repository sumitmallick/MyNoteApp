const notes = []
let nextId = 1;

exports.getAllNotes = (req, res) => {
    res.json(notes);
};

exports.createNote = (req, res) => {
    console.log(req.body);
    const { title, content } = req.body;
    const newNote = { id: nextId++, title, content };
    notes.push(newNote);
    res.status(201).json(newNote);
};

exports.getNoteById = (req, res) => {
    const note = notes.find((n) => n.id === parseInt(req.params.id));
    if (!note) {
        return res.status(404).json({message: 'Note not found'});
    }
    res.status(200).json(note);
};

exports.updateNote = (req, res) => {
    const note = notes.find((n) => n.id === parseInt(req.params.id));
    if (!note) {
        return res.status(404).json({message: 'Note not found'});
    }
    const { title, content } = req.body;
    note.title = title ?? note.title;
    note.content = content ?? note.content;
    res.status(200).json(note);
};

exports.deleteNote = (req, res) => {
    const noteIndex = notes.findIndex((n) => n.id === parseInt(req.params.id));
    if (noteIndex === -1) {
        return res.status(404).json({message: 'Note not found'});
    }
    const deletedNote = notes.splice(noteIndex, 1);
    res.status(200).json({message: 'Note deleted', note: deletedNote[0]});
};
