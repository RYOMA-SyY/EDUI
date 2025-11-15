import { motion } from 'motion/react';
import { SectionLayout } from '../SectionLayout';
import { CodeBlock } from '../CodeBlock';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { useState } from 'react';

export function TablesSection() {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const codeExample = `/* Standard Table */
table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
}

thead {
  background: #f8f9fa;
}

th {
  text-align: left;
  padding: 16px;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #e0e0e0;
}

td {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
}

tbody tr:hover {
  background: #f8f9fa;
  transition: background 0.2s;
}

/* Striped Rows */
tbody tr:nth-child(even) {
  background: #fafafa;
}

/* Sortable Headers */
.sortable {
  cursor: pointer;
  user-select: none;
}

.sortable::after {
  content: '⇅';
  margin-left: 8px;
  opacity: 0.3;
}`;

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator', status: 'Active' },
  ];

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (column: string) => {
    if (sortColumn !== column) {
      return <ArrowUpDown size={16} className="inline ml-1 text-slate-400" />;
    }
    return sortDirection === 'asc' 
      ? <ArrowUp size={16} className="inline ml-1 text-blue-600" />
      : <ArrowDown size={16} className="inline ml-1 text-blue-600" />;
  };

  return (
    <SectionLayout
      id="tables"
      title="Tables & Data Display"
      description="Design clear, scannable tables for displaying structured data. Master sorting, filtering, and responsive table patterns."
    >
      <div className="space-y-12">
        {/* Key Principles */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-6">🔑 Table Design Principles</h3>
          <div className="grid md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Clear Headers</strong>
                <p className="text-white/60">Descriptive column titles</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Visual Hierarchy</strong>
                <p className="text-white/60">Alternating row colors</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Hover States</strong>
                <p className="text-white/60">Highlight on row hover</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
              <div>
                <strong className="text-white">Responsive Design</strong>
                <p className="text-white/60">Scroll on mobile devices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Examples */}
        <div>
          <h3 className="text-2xl text-white mb-6">✨ Table Examples</h3>
          
          {/* Standard Table */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Standard Table</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Role</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr
                      key={row.id}
                      className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                      }`}
                    >
                      <td className="px-4 py-3 text-sm text-slate-700">{row.name}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{row.email}</td>
                      <td className="px-4 py-3 text-sm text-slate-700">{row.role}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          row.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sortable Table */}
          <div className="bg-white rounded-3xl p-8 mb-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Sortable Table</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th
                      onClick={() => handleSort('name')}
                      className="px-4 py-3 text-left text-sm font-semibold text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors select-none"
                    >
                      Name {getSortIcon('name')}
                    </th>
                    <th
                      onClick={() => handleSort('email')}
                      className="px-4 py-3 text-left text-sm font-semibold text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors select-none"
                    >
                      Email {getSortIcon('email')}
                    </th>
                    <th
                      onClick={() => handleSort('role')}
                      className="px-4 py-3 text-left text-sm font-semibold text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors select-none"
                    >
                      Role {getSortIcon('role')}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr
                      key={row.id}
                      className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                      }`}
                    >
                      <td className="px-4 py-3 text-sm text-slate-700">{row.name}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{row.email}</td>
                      <td className="px-4 py-3 text-sm text-slate-700">{row.role}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          row.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Compact Table */}
          <div className="bg-white rounded-3xl p-8">
            <h4 className="text-slate-900 mb-6 font-semibold">Compact Table</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-3 py-2 text-left text-xs font-semibold text-slate-700">ID</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-slate-700">Product</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-slate-700">Price</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-slate-700">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#001', product: 'Laptop', price: '$999', stock: 'In Stock' },
                    { id: '#002', product: 'Mouse', price: '$29', stock: 'Low Stock' },
                    { id: '#003', product: 'Keyboard', price: '$79', stock: 'In Stock' },
                  ].map((row, index) => (
                    <tr
                      key={row.id}
                      className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                      }`}
                    >
                      <td className="px-3 py-2 text-xs text-slate-700 font-mono">{row.id}</td>
                      <td className="px-3 py-2 text-xs text-slate-700">{row.product}</td>
                      <td className="px-3 py-2 text-xs text-slate-700 font-semibold">{row.price}</td>
                      <td className="px-3 py-2">
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          row.stock === 'In Stock' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {row.stock}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="text-2xl text-white mb-6">💻 Code Examples</h3>
          <CodeBlock code={codeExample} language="css" />
        </div>
      </div>
    </SectionLayout>
  );
}

