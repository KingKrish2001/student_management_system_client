'use client';

import { useState } from 'react';

export default function StudentManagement() {
  const [students, setStudents] = useState([
    { id: 'ST001', name: 'Krishan Perera', course: 'Software Engineering', gpa: '3.8' },
    { id: 'ST002', name: 'Amaya Silva', course: 'Information Technology', gpa: '3.6' },
  ]);

  const [formData, setFormData] = useState({ id: '', name: '', course: '', gpa: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!formData.id || !formData.name) return;
    setStudents([...students, formData]);
    setFormData({ id: '', name: '', course: '', gpa: '' });
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="border-b border-slate-700 pb-4">
          <h1 className="text-3xl font-bold text-sky-400">Student Management System</h1>
          <p className="text-slate-400 text-sm mt-1">Full-Stack Client Portal</p>
        </header>

        {/* Add Student Form */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-slate-200">Add New Student</h2>
          <form onSubmit={handleAddStudent} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              name="id"
              placeholder="Student ID"
              value={formData.id}
              onChange={handleChange}
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              required
            />
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              required
            />
            <input
              type="text"
              name="gpa"
              placeholder="GPA"
              value={formData.gpa}
              onChange={handleChange}
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-sky-500"
              required
            />
            <button
              type="submit"
              className="md:col-span-4 bg-sky-600 hover:bg-sky-500 text-white font-medium py-2 rounded-lg transition"
            >
              Save Student
            </button>
          </form>
        </div>

        {/* Student Records Table */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-md">
          <div className="p-4 border-b border-slate-700">
            <h2 className="text-xl font-semibold text-slate-200">Registered Students</h2>
          </div>
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Student ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Course</th>
                <th className="px-6 py-3">GPA</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-slate-750 transition">
                  <td className="px-6 py-4 font-mono font-medium text-sky-400">{student.id}</td>
                  <td className="px-6 py-4">{student.name}</td>
                  <td className="px-6 py-4">{student.course}</td>
                  <td className="px-6 py-4">{student.gpa}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="text-rose-400 hover:text-rose-300 font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                    No student records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}