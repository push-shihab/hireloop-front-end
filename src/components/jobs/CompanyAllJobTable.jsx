"use client";

import { Table, Chip } from "@heroui/react";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

const CompanyAllJobTable = ({ jobs }) => {
  return (
    <Table className="w-full text-zinc-900">
      <Table.ScrollContainer>
        <Table.Content aria-label="Manage All Jobs Table">
          <Table.Header>
            <Table.Column isRowHeader>Job Title</Table.Column>
            <Table.Column>Type / Category</Table.Column>
            <Table.Column>Location</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>

          <Table.Body
            renderEmptyState={() => (
              <div className="py-6 text-center text-zinc-500">
                No jobs found.
              </div>
            )}
          >
            {jobs.map((job) => (
              <Table.Row key={job._id}>
                <Table.Cell className="font-semibold text-zinc-900">
                  {job.jobTitle}
                </Table.Cell>

                <Table.Cell>
                  <div className="flex flex-col">
                    <span className="text-zinc-800 font-medium">
                      {job.jobType}
                    </span>
                    <span className="text-zinc-400 text-xs mt-0.5">
                      {job.jobCategory}
                    </span>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-zinc-600">
                  {job.location.length == 0 ? "Remote" : job.location}
                </Table.Cell>

                <Table.Cell>
                  <Chip
                    size="sm"
                    variant="flat"
                    className="text-emerald-700 bg-emerald-50 border border-emerald-100/80 font-medium rounded-md px-2"
                  >
                    {job.status || "Active"}
                  </Chip>
                </Table.Cell>

                <Table.Cell>
                  <div className="flex items-center gap-3.5 text-zinc-400">
                    <button
                      type="button"
                      className="hover:text-zinc-900 transition-colors cursor-pointer"
                    >
                      <FiEye size={16} />
                    </button>
                    <button
                      type="button"
                      className="hover:text-zinc-900 transition-colors cursor-pointer"
                    >
                      <FiEdit2 size={15} />
                    </button>
                    <button
                      type="button"
                      className="text-red-600 cursor-pointer"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default CompanyAllJobTable;
