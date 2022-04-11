using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SEproject.Data
{
    public partial class SierraEchoContext : DbContext
    {
        public SierraEchoContext()
        {
        }

        public SierraEchoContext(DbContextOptions<SierraEchoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Course> Courses { get; set; } = null!;
        public virtual DbSet<Instructor> Instructors { get; set; } = null!;
        public virtual DbSet<Student> Students { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=sierraecho.mysql.database.azure.com;userid=se;password=Spring2022;database=seproj", Microsoft.EntityFrameworkCore.ServerVersion.Parse("5.7.37-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8_general_ci")
                .HasCharSet("utf8");

            modelBuilder.Entity<Course>(entity =>
            {
                entity.ToTable("courses");

                entity.HasIndex(e => e.InstructorEmail, "email_idx");

                entity.HasIndex(e => e.InstructorFirst, "firstName_idx");

                entity.HasIndex(e => e.InstructorId, "id_idx");

                entity.HasIndex(e => e.InstructorLast, "lastName_idx");

                entity.Property(e => e.CourseId)
                    .HasMaxLength(15)
                    .HasColumnName("courseID");

                entity.Property(e => e.CourseName)
                    .HasMaxLength(45)
                    .HasColumnName("courseName");

                entity.Property(e => e.InstructorEmail)
                    .HasMaxLength(45)
                    .HasColumnName("instructorEmail");

                entity.Property(e => e.InstructorFirst)
                    .HasMaxLength(45)
                    .HasColumnName("instructorFirst");

                entity.Property(e => e.InstructorId)
                    .HasMaxLength(45)
                    .HasColumnName("instructorID");

                entity.Property(e => e.InstructorLast)
                    .HasMaxLength(45)
                    .HasColumnName("instructorLast");
            });

            modelBuilder.Entity<Instructor>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.FirstName, e.LastName, e.Email })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0, 0, 0 });

                entity.ToTable("instructors");

                entity.HasIndex(e => e.Email, "email");

                entity.HasIndex(e => e.FirstName, "firstName");

                entity.HasIndex(e => e.Id, "id");

                entity.HasIndex(e => e.LastName, "lastName");

                entity.Property(e => e.Id)
                    .HasMaxLength(6)
                    .HasColumnName("id");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(45)
                    .HasColumnName("firstName");

                entity.Property(e => e.LastName)
                    .HasMaxLength(45)
                    .HasColumnName("lastName");

                entity.Property(e => e.Email)
                    .HasMaxLength(45)
                    .HasColumnName("email");

                entity.Property(e => e.Major)
                    .HasMaxLength(45)
                    .HasColumnName("major");

                entity.Property(e => e.Position)
                    .HasMaxLength(45)
                    .HasColumnName("position");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.ToTable("students");

                entity.HasIndex(e => e.Email, "email_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasMaxLength(6)
                    .HasColumnName("id");

                entity.Property(e => e.Email)
                    .HasMaxLength(45)
                    .HasColumnName("email");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(45)
                    .HasColumnName("firstName");

                entity.Property(e => e.LastName)
                    .HasMaxLength(45)
                    .HasColumnName("lastName");

                entity.Property(e => e.Major)
                    .HasMaxLength(45)
                    .HasColumnName("major");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
